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
};

const setDisplayMode = {
  type: 'set_display_mode',
  style: 'video_blocks',
  message0: 'Set display mode to %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'MODE',
      options: [
        ['0', 'MODE_0'],
        ['1', 'MODE_1'],
        ['2', 'MODE_2'],
        ['3', 'MODE_3'],
        ['4', 'MODE_4'],
        ['5', 'MODE_5'],
      ]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

const enableForcedBlank = {
  type: 'enable_forced_blank',
  style: 'video_blocks',
  message0: '%1 forced blank',
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

const setBackgroundColorMode = {
  type: 'set_background_color_mode',
  style: 'video_blocks',
  message0: 'Set background %1 color mode %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'BACKGROUND_NO',
      options: [
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3']
      ]
    },
    {
      type: 'field_dropdown',
      name: 'COLOR_MODE',
      options: [
        ['256/1', '256/1'],
        ['16/16', '16/16']
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
  message0: '%1 sprite %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DO_SHOW',
      options: [
        ['Show', 'true'],
        ['Hide', 'false']
      ]
    },
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
};

const showAllSprites = {
  type: 'show_all_sprites',
  style: 'sprite_blocks',
  message0: '%1 all sprites',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DO_SHOW',
      options: [
        ['Show', 'true'],
        ['Hide', 'false']
      ]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

const moveSprite = {
  type: 'move_sprite',
  style: 'sprite_blocks',
  message0: 'Move sprite %1 to x %2 y %3',
  args0: [
    {
      type: 'field_number',
      name: 'SPRITE_NO',
      min: 0,
      max: 127
    },
    {
      type: 'field_number',
      name: 'X',
      min: 0,
      max: 511
    },
    {
      type: 'field_number',
      name: 'Y',
      min: 0,
      max: 255
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

const setSpriteTile = {
  type: 'set_sprite_tile',
  style: 'sprite_blocks',
  message0: 'Set sprite %1 tile %2',
  args0: [
    {
      type: 'field_number',
      name: 'SPRITE_NO',
      min: 0,
      max: 127
    },
    {
      type: 'field_number',
      name: 'TILE_NO',
      min: 0,
      max: 1023
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

const setSpriteSize = {
  type: 'set_sprite_size',
  style: 'sprite_blocks',
  message0: 'Set sprite %1 size %2',
  args0: [
    {
      type: 'field_number',
      name: 'SPRITE_NO',
      min: 0,
      max: 127
    },
    {
      type: 'field_dropdown',
      name: 'SIZE',
      options: [
        ['Tiny', '0'],
        ['Small', '1'],
        ['Medium', '2'],
        ['Large', '3']
      ]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

const setSpriteShape = {
  type: 'set_sprite_shape',
  style: 'sprite_blocks',
  message0: 'Set sprite %1 shape %2',
  args0: [
    {
      type: 'field_number',
      name: 'SPRITE_NO',
      min: 0,
      max: 127
    },
    {
      type: 'field_dropdown',
      name: 'SHAPE',
      options: [
        ['Square', 'SQUARE'],
        ['Wide', 'WIDE'],
        ['Tall', 'TALL']
      ]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

const setSpriteColorMode = {
  type: 'set_sprite_color_mode',
  style: 'sprite_blocks',
  message0: 'Set sprite %1 color mode %2',
  args0: [
    {
      type: 'field_number',
      name: 'SPRITE_NO',
      min: 0,
      max: 127
    },
    {
      type: 'field_dropdown',
      name: 'COLOR_MODE',
      options: [
        ['256/1', '256/1'],
        ['16/16', '16/16']
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
  setDisplayMode,
  enableForcedBlank,
  enableBackground,
  setBackgroundColorMode,
  enableObjects,
  showSprite,
  showAllSprites,
  moveSprite,
  setSpriteTile,
  setSpriteSize,
  setSpriteShape,
  setSpriteColorMode
]);
