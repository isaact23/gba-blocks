import * as Blockly from 'blockly/core';

const onGameStart = {
  type: 'on_game_start',
  style: 'control_blocks',
  message0: 'On game start',
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
}

const enableBackground = {
  type: 'enable_background',
  style: 'video_blocks',
  message0: '%1 background %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DO_ENABLE',
      options: [
        ['Enable', 'true'],
        ['Disable', 'false']
      ]
    },
    {
      type: 'field_dropdown',
      name: 'BACKGROUND_NO',
      options: [
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3']
      ]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  onGameStart,
  enableBackground
]);
