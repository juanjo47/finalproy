import React from 'react';

import Table from './Table';

export default {
  title: 'Componentes/Table',
  component: Table,
  argTypes:{
    ColN: {type: "number", defaultValue: 3 }, 
    RowN: {type: "number", defaultValue: 2 },
    array: {type: "array", defaultValue: ["n","1"]}
  }
};

const Template = (args) => <Table {...args} />;

export const CreateTable = Template.bind({});
CreateTable.args = {
  striped: true,
  responsive: true
};

