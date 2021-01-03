import { makeStyles, Slider, Theme, Typography } from '@material-ui/core'
import * as React from 'react'
import { useState } from 'react'

export function LetItRainFrequency() {
  const classes = useStyles()
  const [daysPerWeek, setDaysPerWeek] = useState( 2 )

  return (
    <>
      <Typography variant="h2" className={classes.question}>
        Wie oft moechtest du maximal giessen?
      </Typography>
      <Slider
        min={2}
        max={6}
        value={daysPerWeek}
        onChange={( _, value ) =>
          setDaysPerWeek( typeof value == 'number' ? value : 2 )
        }
        aria-labelledby="discrete-slider-always"
        step={1}
        valueLabelDisplay="on"
      />
      <Typography variant="body1">{daysPerWeek} mal pro Woche</Typography>
      <div className={classes.bed}>
        {[...Array( 7 )].map(( e, index ) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`${classes.carrot} ${
              daysPerWeek >= index + 1 ? 'active' : ''
            }`}
            width="82.209"
            height="105.599"
            viewBox="0 0 82.209 105.599"
          >
            <g transform="translate(-91.734 57.392) rotate(-43)">
              <path
                d="M119.026,160.58l-.02-.007c-.025-.026-.057-.083-.083-.108l-14.717-14.736h0a6.179,6.179,0,0,0-4.392-1.9,5.828,5.828,0,0,0-5.168,3.016h0L91.227,152.3l6.084,7.433c.55.7.616,1.473.264,1.825l-.021.021c-.428.428-1.1.286-1.825-.264l-6.709-5.491L73.412,180.747l3.567,4.358c.55.7.616,1.473.264,1.825l-.021.021c-.428.428-1.1.286-1.825-.264L71.625,183.6l-6.692,10.685h0a6.5,6.5,0,0,0-.933,3.3,5.956,5.956,0,0,0,5.954,5.969,6.95,6.95,0,0,0,3.848-1.4l21.421-15.7-5.4-6.6c-.55-.7-.617-1.473-.264-1.825l.021-.021c.428-.428,1.1-.286,1.825.264l7.081,5.823q9.9-7.253,19.808-14.484l0,0a6.068,6.068,0,0,0,2.429-4.823,5.731,5.731,0,0,0-1.691-4.2Z"
                transform="translate(0 -77.957)"
                fill="#eb8d17"
              />
              <path
                d="M341.351,64.933l-3.075-5.166L325.922,66.9,335.105,51l-5.152-3L316.9,70.586l5.332,5.332Z"
                transform="translate(-205.725 0)"
                fill="#006f52"
              />
            </g>
          </svg>
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.soil}
          viewBox="0 0 500 75"
        >
          <path
            d="M-0.28,39.97 C242.94,51.80 242.37,30.08 500.84,37.98 L500.00,150.00 L0.00,150.00 Z"
            stroke="none"
            fill="#8b4513"
          />
        </svg>
      </div>
    </>
  )
}

const useStyles = makeStyles(( theme: Theme ) => ( {
  question: {
    textAlign: 'center',
    fontFamily: 'Alegreya',
    width: '70%',
    margin: '38px 0 58px 0',
  },
  bed: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    marginTop: '50px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  soil: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
  },
  carrot: {
    position: 'relative',
    maxWidth: '14.285%',
    transition: 'all .5s ease',
    top: 0,
    '&:nth-child(1)': {
      order: 4,
      transform: 'scaleX(-1) rotate(-7deg) scale(0.8)',
      '&.active': {
        transform: 'scaleX(-1) rotate(7deg) scale(1.1)',
        top: '-18px',
      },
    },
    '&:nth-child(2)': {
      order: 7,
      transform: 'rotate(6deg) scale(0.8)',
      '&.active': {
        transform: 'rotate(-6deg) scale(1.1)',
        top: '-15px',
      },
    },
    '&:nth-child(3)': {
      order: 1,
      transform: 'rotate(-3deg) scale(0.8)',
      '&.active': {
        transform: 'rotate(3deg) scale(1.1)',
        top: '-21px',
      },
    },
    '&:nth-child(4)': {
      order: 5,
      transform: 'rotate(-7deg) scale(0.8)',
      '&.active': {
        transform: 'rotate(7deg) scale(1.1)',
        top: '-12px',
      },
    },
    '&:nth-child(5)': {
      order: 2,
      transform: 'rotate(-9deg) scale(0.8)',
      '&.active': {
        transform: 'rotate(7deg) scale(1.1)',
        top: '-18px',
      },
    },
    '&:nth-child(6)': {
      order: 6,
      transform: 'scale(0.8)',
      '&.active': {
        transform: 'scale(1.1)',
        top: '-25px',
      },
    },
    '&:nth-child(7)': {
      order: 3,
      transform: 'rotate(-7deg) scale(0.8)',
      '&.active': {
        transform: 'rotate(7deg) scale(1.1)',
        top: '-21px',
      },
    },
  },
} ))
