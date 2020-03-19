import React from 'react'
import PropTypes from 'prop-types'
import {Bar, Line} from 'react-chartjs-2'

import colors from '../styles/colors'

const options = {
  tooltips: {
    mode: 'index'
  },
  scales: {
    xAxes: [{
      stacked: true,
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'DD/MM'
        },
        tooltipFormat: 'DD/MM'
      },
      gridLines: {
        offsetGridLines: true
      },
      offset: true
    }],
    yAxes: [{
      stacked: false,
      id: 'y-axis-1'
    }]
  }
}

const formatData = data => {
  const datasets = []

  if (data.some(h => h.casConfirmes)) {
    datasets.push({
      label: 'En vie',
      type: 'line',
      data: data.map(h => h.casConfirmes - (h.deces || 0)),
      borderColor: colors.orange,
      fill: false,
    })
  }

  if (data.some(h => h.deces)) {
    datasets.push({
      label: 'Décédés',
      type: 'line',
      data: data.map(h => h.deces),
      borderColor: colors.red,
      fill: false,
    })
  }

  return {
    labels: data.map(h => new Date(h.date)),
    datasets
  }
}

const formatDataNewCases = data => {
  const datasets = []

  if (data.some(h => h.casConfirmes)) {
    datasets.push({
      label: 'Nouveaux cas',
      type: 'bar',
      data: data.map((h, index) => index === 0 ? null : h.casConfirmes - data[index - 1].casConfirmes),
      backgroundColor: colors.orange,
    })
  }

  if (data.some(h => h.deces)) {
    datasets.push({
      label: 'Nouveaux décés',
      type: 'bar',
      data: data.map((h, index) => index === 0 ? null : h.deces - data[index - 1].deces),
      backgroundColor: colors.red,
    })
  }

  return {
    labels: data.map(h => new Date(h.date)),
    datasets
  }
}

const ConfirmedChart = ({data, height}) => (
  <div style={{padding: '1em'}}>
    <Line data={formatData(data)} options={options} height={height} />
    <Bar data={formatDataNewCases(data)} options={options} height={height} />
  </div>
)

ConfirmedChart.defaultProps = {
  height: null
}

ConfirmedChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number
}

export default ConfirmedChart
