import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  makeStyles,
  Theme,
} from '@material-ui/core'
import React from 'react'

interface Props {
  dates: Array<Date>;
}

export function Calendar( { dates = [] }: Props ) {
  const classes = useStyles()

  const [dateCheckState, setDateCheckState] = React.useState( {} )

  const daysOfWeek = new Map( [
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'Wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday'],
    [0, 'Sunday'],
  ] )

  const firstDate = dates[0]
  const lastDate = dates[dates.length - 1]

  // TODO: Currently each calendar week needs 7 dates, otherwise we get wrong/missing checkboxes. How to fix this?
  const datesByWeeks = dates.reduce(( map, date ) => {
    const cw = getCalendarWeekNumber(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )
    map.has( cw ) || map.set( cw, [] )
    map.get( cw ).push( date )

    return map
  }, new Map())

  function getCalendarWeekNumber( year: number, month: number, date: number ) {
    const d = new Date( year, month, date )
    d.setHours( 0, 0, 0, 0 )
    // Thursday in current week decides the year.
    d.setDate( d.getDate() + 3 - (( d.getDay() + 6 ) % 7 ))
    // January 4 is always in week 1.
    const weekOne = new Date( d.getFullYear(), 0, 4 )
    // Adjust to thursday in week 1 and count number of weeks from date to weekOne.
    return (
      1 +
      Math.round(
        (( d.getTime() - weekOne.getTime()) / 86400000 -
          3 +
          (( weekOne.getDay() + 6 ) % 7 )) /
          7
      )
    )
  }

  const handleAllChange = ( event ) => {
    // (un)check all dates
    const relatedDateCheckStates = {}
    Object.keys( dates ).forEach( function ( key ) {
      const date = dates[key]
      relatedDateCheckStates[date.toString()] = event.target.checked
    } )
    setDateCheckState( { ...dateCheckState, ...relatedDateCheckStates } )
  }

  const handleDayChange = ( event, dayOfWeek: number ) => {
    // (un)check each date with same day
    const relatedDateCheckStates = {}
    Object.keys( dates ).forEach( function ( key ) {
      const date = dates[key]
      if ( date.getDay() == dayOfWeek ) {
        relatedDateCheckStates[date.toString()] = event.target.checked
      }
    } )
    setDateCheckState( { ...dateCheckState, ...relatedDateCheckStates } )
  }

  const handleCwChange = ( event, cw: number ) => {
    // (un)check date of this calendar week
    const relatedDateCheckStates = {}
    Object.keys( dates ).forEach( function ( key ) {
      const date = dates[key]
      const dateCW = getCalendarWeekNumber(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      )
      if ( dateCW == cw ) {
        relatedDateCheckStates[date.toString()] = event.target.checked
      }
    } )
    setDateCheckState( { ...dateCheckState, ...relatedDateCheckStates } )
  }

  const handleDateChange = ( event, date: Date ) => {
    setDateCheckState( {
      ...dateCheckState,
      [date.toString()]: event.target.checked,
    } )
  }

  const AllDatesChecked = (): boolean => {
    return !dates.some(( date ) => {
      return !dateCheckState[date.toString()]
    } )
  }

  const DayDatesChecked = ( dayOfWeek: number ): boolean => {
    return !dates.some(( date ) => {
      return date.getDay() == dayOfWeek && !dateCheckState[date.toString()]
    } )
  }

  const CwDatesChecked = ( cw: number ): boolean => {
    return !dates.some(( date ) => {
      const dateCw = getCalendarWeekNumber(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      )
      return dateCw == cw && !dateCheckState[date.toString()]
    } )
  }

  function AllCheckBox(): React.ReactElement<any, any> {
    return (
      <Checkbox
        classes={{
          root: classes.checkBox,
          checked: classes.checkBoxChecked,
        }}
        checkedIcon={<CheckBoxIcon checked />}
        icon={<CheckBoxIcon />}
        color="primary"
        onChange={handleAllChange}
        checked={AllDatesChecked()}
      />
    )
  }

  function DayCheckBox( props: {
    dayOfWeek: number;
  } ): React.ReactElement<any, any> {
    return (
      <Checkbox
        classes={{
          root: classes.checkBox,
          checked: classes.checkBoxChecked,
        }}
        checkedIcon={<CheckBoxIcon checked />}
        icon={<CheckBoxIcon />}
        color="primary"
        onChange={( e ) => handleDayChange( e, props.dayOfWeek )}
        checked={DayDatesChecked( props.dayOfWeek )}
      />
    )
  }

  function CwCheckBox( props: { cw: number } ): React.ReactElement<any, any> {
    return (
      <Checkbox
        classes={{
          root: classes.checkBox,
          checked: classes.checkBoxChecked,
        }}
        checkedIcon={<CheckBoxIcon checked />}
        icon={<CheckBoxIcon />}
        color="primary"
        onChange={( e ) => handleCwChange( e, props.cw )}
        checked={CwDatesChecked( props.cw )}
      />
    )
  }

  function DateCheckBox( props: { date: Date } ): React.ReactElement<any, any> {
    return (
      <Checkbox
        classes={{
          root: classes.checkBox,
          checked: classes.checkBoxChecked,
        }}
        checkedIcon={<CheckBoxIcon checked />}
        icon={<CheckBoxIcon />}
        color="primary"
        onChange={( e ) => handleDateChange( e, props.date )}
        checked={dateCheckState[props.date.toString()] || false}
      />
    )
  }

  function CheckBoxIcon( props: { checked?: boolean } ) {
    const checkBoxClasses = [classes.checkBoxIcon]
    if ( props.checked ) {
      checkBoxClasses.push( classes.checkBoxIconChecked )
    }
    return <div className={checkBoxClasses.join( ' ' )} aria-hidden="true" />
  }

  return (
    <div className={`${classes.wrapper}`}>
      {/* TODO: Use js library to handle time span format including floating month and year */}
      <p>
        Zeitraum: {firstDate.getDate()}. -{' '}
        {lastDate.toLocaleDateString( 'de-DE', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        } )}
      </p>
      <FormGroup row>
        <FormControlLabel
          classes={{
            root: `${classes.checkBoxLabel} ${classes.headCheckBox}`,
            label: `${classes.checkBoxLabelText}`,
          }}
          control={<AllCheckBox />}
          label={'✓'}
        />
        {Array.from( daysOfWeek.keys()).map(( dayOfWeek ) => (
          <FormControlLabel
            key={dayOfWeek}
            classes={{
              root: `${classes.checkBoxLabel} ${classes.headCheckBox}`,
              label: `${classes.checkBoxLabelText}`,
            }}
            control={<DayCheckBox dayOfWeek={dayOfWeek} />}
            label={daysOfWeek.get( dayOfWeek )}
          />
        ))}
      </FormGroup>
      {Array.from( datesByWeeks.keys()).map(( cw ) => (
        <FormGroup row key={cw}>
          <FormControlLabel
            classes={{
              root: `${classes.checkBoxLabel} ${classes.headCheckBox}`,
              label: `${classes.checkBoxLabelText}`,
            }}
            control={<CwCheckBox cw={cw} />}
            label={`CW ${cw}`}
          />
          {datesByWeeks.get( cw ).map(( date: Date, dateIndex: number ) => (
            <FormControlLabel
              key={dateIndex}
              classes={{
                root: classes.checkBoxLabel,
                label: classes.checkBoxLabelText,
              }}
              control={<DateCheckBox date={date} />}
              label={date.getDate()}
            />
          ))}
        </FormGroup>
      ))}
    </div>
  )
}

const useStyles = makeStyles(( theme: Theme ) => ( {
  wrapper: {
    padding: '10px',
    background: '#f7f7f7',
  },
  legend: {
    // todo: get rid of fixed dimensions
    width: '50px',
    height: '50px',
    lineHeight: '50px',
  },
  headCheckBox: {},
  checkBox: {
    padding: '2px',
  },
  checkBoxChecked: {
    color: theme.palette.primary.contrastText,
  },
  checkBoxIcon: {
    width: '36px',
    height: '36px',
    border: '1px dotted ' + theme.palette.grey[400],
    borderRadius: '3px',
    background: '#fff',
    '$headCheckBox &': {
      border: '1px solid ' + theme.palette.primary.main,
    },
  },
  checkBoxIconChecked: {
    borderType: 'solid',
    background: '#BDE3DC',
    '$headCheckBox &': {
      background: theme.palette.primary.main,
    },
  },
  checkBoxLabel: {
    position: 'relative',
    margin: 0,
  },
  checkBoxLabelBold: {},
  checkBoxLabelText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    marginTop: '1px',
    fontFamily: 'Consolas, monaco, monospace',
    fontSize: '14px',
    lineHeight: '1.2',
    // show first two chars
    width: '2.1ch',
    overflow: 'hidden',
    '$headCheckBox &': {
      color: theme.palette.primary.main,
    },
    '$checkBoxChecked + &': {
      color: theme.palette.text.primary,
    },
    '$headCheckBox $checkBoxChecked + &': {
      color: theme.palette.primary.contrastText,
    },
  },
} ))