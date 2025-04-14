import * as Blockly from 'blockly/core';

const onGameStart = {
  type: 'on_game_start',
  style: 'control_blocks',
  message0: 'On game start %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'MEMBERS'
    }
  ],
  tooltip: '',
  helpUrl: ''
}

const setDisplayMode = {
  type: 'set_display_mode',
  style: 'video_blocks',
  message0: 'Set display mode to %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'MODE',
      options: [
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
      ]
    }
  ],
  previousStatement: null,
  nextStatement: null,
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

const enableObjects = {
  type: 'enable_objects',
  style: 'video_blocks',
  message0: '%1 objects',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DO_ENABLE',
      options: [
        ['Enable', 'true'],
        ['Disable', 'false']
      ]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

const showSprite = {
  type: 'show_sprite',
  style: 'sprite_blocks',
  message0: 'Show sprite %1',
  args0: [
    {
      type: 'field_number',
      name: 'SPRITE_NO',
      min: 0,
      max: 127
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
}

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  onGameStart,
  setDisplayMode,
  enableBackground,
  enableObjects,
  showSprite
]);
