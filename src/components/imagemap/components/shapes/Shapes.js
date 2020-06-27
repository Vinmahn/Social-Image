import Rectangle from './Rectangle';
import Circle from './Circle';
import Triangle from './Triangle';

export const shapes = [
  {
    name: 'Triangle',
    component: Triangle,
    item: {
      name: 'Triangle',
      type: 'shape',
      option: {
        type: 'triangle',
        width: 100,
        height: 100,
        name: 'New triangle',
      },
    },
  },
  {
    name: 'Circle',
    component: Circle,
    item: {
      name: 'Circle',
      type: 'shape',
      option: {
        type: 'circle',
        radius: 100,
        name: 'New circle',
      },
    },
  },
  {
    name: 'Rectangle',
    component: Rectangle,
    item: {
      name: 'Rectangle',
      type: 'shape',
      option: {
        type: 'rect',
        width: 100,
        height: 100,
        name: 'New rectangle',
      },
    },
  },
];
