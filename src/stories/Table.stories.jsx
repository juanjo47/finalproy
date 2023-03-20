import React from 'react';

import Table from './Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Componentes/Table',
  component: Table,
  argTypes:{
    ColN: {type: "number"}, RowN: {type: "number"},
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Table {...args} />;

export const CreateTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CreateTable.args = {
  striped: true,
  responsive: true
};

