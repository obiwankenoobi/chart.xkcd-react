import React from 'react';
import  Line  from '../lib/Line';
import  Bar  from '../lib/Bar';
import  Pie  from '../lib/Pie';

const App = () => (
  <div>
    <div>
      <Line 
        config={{
          title: 'Monthly income of an indie developer',
          xLabel: 'Month',
          yLabel: '$ Dollors',
          data: {
            labels:['1', '2', '3', '4', '5', '6','7', '8', '9', '10'],
            datasets: [{
              label: 'Plan',
              data: [30, 70, 200, 300, 500 ,800, 1500, 2900, 5000, 8000],
            }, {
              label: 'Reality',
              data: [0, 1, 30, 70, 80, 100, 50, 80, 40, 150],
            }]
          },
      }}/>

      <Bar
        config={{
          data: {
            labels:['github stars', 'patrons'],
            datasets: [{
              // label: 'Battle',
              data: [100, 2],
            }]
          },
        }}
      />

      <Pie
        config={{
          title: 'What Tim made of',
          data: {
            labels:[ 'a', 'b', 'e', 'f', 'g'],
            datasets: [{
              data: [500, 200, 80, 90, 100,],
            }]
          }, 
        }}
      />
    </div>
  </div>
);

export default App;
