import {gql, useMutation, useQuery} from '@apollo/client'
import {   Box, Button,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Theme,
  Typography ,
  useMediaQuery, useTheme
} from '@material-ui/core'
import {useKeycloak} from '@react-keycloak/web'
import dayjs from 'dayjs'
import * as React from 'react'
import {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router-dom'

import {Calendar} from '../components'
import {fromNeo4jDate, neo4jDateToInput,toNeo4jDateInput} from '../helper'
import {_Neo4jDateInput, WateringPeriod} from '../types/graphql'

const GET_WATERING_PERIOD = gql`
    query WateringPeriod($gardenId: ID!, $date: _Neo4jDateInput, $userId: String) {
        WateringPeriod( filter:
        { AND: [
            { at: { gardenId:  $gardenId } },
            { from_lte: $date },
            { till_gte: $date } ]
        }) {
            _id
            from { day month year }
            till { day month year }
            wateringtasks( filter: {
                users_available_some: { id: $userId }
            }) {
                _id
                date { day month year }
                users_available { _id id label }
            }
        }
    }
`

const SET_USER_AVAILABLITY_FOR_WATERING_PERIOD = gql`
    mutation  setUserAvailability($gardenId: ID!, $dates: [_Neo4jDateInput]!, $from: _Neo4jDateInput, $till: _Neo4jDateInput) {
        setUserAvailability(
            gardenId: $gardenId
            dates: $dates
            from: $from
            till: $till
        )
    }
`
interface Props {
  startDate: Date
}

export function LetItRainAvailabilityDialog( {startDate } : Props ) {
  const classes = useStyles()
  const { keycloak: { subject: userId } } = useKeycloak()
  const { t } = useTranslation( 'letItRain' )
  const { gardenId } = useParams<{gardenId: string}>()
  const theme = useTheme()
  const history = useHistory()
  const fullscreenDialog = useMediaQuery( theme.breakpoints.down( 'md' ))
  const [availableDates, setAvailableDates] = useState<Array<Date>>( [] )
  const {data: wateringPeriodData} = userId && useQuery<{ WateringPeriod: WateringPeriod[]}, {gardenId: string, date: _Neo4jDateInput, userId: string}>( GET_WATERING_PERIOD, {
    variables: {
      gardenId,
      date: toNeo4jDateInput( startDate ),
      userId
    }
  } ) || {}
  const tasks =  wateringPeriodData?.WateringPeriod?.[0]?.wateringtasks || []
  const { from, till } = wateringPeriodData?.WateringPeriod?.[0] || {}
  const calendarDates =  ( from && till && [...Array( Math.abs( dayjs( fromNeo4jDate( till )).diff( fromNeo4jDate( from ), 'day' )))]
    .map(( _, i ) =>  dayjs( fromNeo4jDate( from )) .add( i, 'day' ).toDate())) || []
  const [setUserAvailabilityMutation] =
    useMutation< Boolean, {gardenId: string, dates: Array<_Neo4jDateInput>, from: _Neo4jDateInput | undefined, till: _Neo4jDateInput | undefined }>(
      SET_USER_AVAILABLITY_FOR_WATERING_PERIOD,
      {variables: {
        gardenId,
        dates: availableDates.map( toNeo4jDateInput ),
        from: from && neo4jDateToInput( from ),
        till: till && neo4jDateToInput( till )
      }} )

  useEffect(() => {
    if( !tasks || tasks.length <= 0 ) return
    const _availableDates = tasks.map( t => t ? fromNeo4jDate( t.date ) : new Date())
    setAvailableDates( _availableDates )
  }, [tasks] )


  const handleCancel = () => history.goBack()
  const handleOkay = async () => {
    await setUserAvailabilityMutation()
    history.goBack()
  }

  return (

    <Dialog
      fullScreen={fullscreenDialog}
      className={classes.dialog + ( fullscreenDialog ? '' : ' noFullscreen' )}
      open={true}
    >
      <DialogTitle className={classes.dialogTitle} />
      <DialogContent className={classes.dialogContent}>
        <Box display="flex" flexDirection="column" flexWrap="wrap" alignItems="center" justifyContent="space-between" className={classes.box} >
          {calendarDates.length > 0 ? <Calendar
            dates={calendarDates}
            selectedDates={availableDates}
            onChange={( dates ) => {
              setAvailableDates( dates )
            }}/> : <Typography variant='body1' >{t( 'wizard' ).sorryNotYetPlanned}</Typography>}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          className={classes.dialogActionButton}
          onClick={handleCancel}
        >
          abbrechen
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.dialogActionButton}
          onClick={handleOkay}
        >
            Okay
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const useStyles = makeStyles(( theme: Theme ) => ( {
  dialog: {
    '&.noFullscreen .MuiDialog-paper': {
      minHeight: '800px',
      minWidth: '700px',
    },
  },
  dialogTitle: {
    '& h2': {
      display: 'flex',
      alignItems: 'center',
    },
    '& span': {
      position: 'relative',
      margin: '0 auto',
      left: '-20px',
    },
  },
  dialogContent: {
    position: 'relative'
  },
  dialogActionButton: {
    padding: '1rem',
    borderRadius: 0,
  },
  box: {
    height: '75%',
    maxHeight: '450px',
  }
} ))
