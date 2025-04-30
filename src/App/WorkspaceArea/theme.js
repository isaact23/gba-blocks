import * as Blockly from 'blockly/core';

export const theme = Blockly.Theme.defineTheme('mainTheme', {
   'base': Blockly.Themes.Classic,
   'blockStyles': {
      'control_blocks': {
         'colourPrimary': '50'
      },
      'video_blocks': {
         'colourPrimary': '200'
      },
      'sprite_blocks': {
         'colourPrimary': '250'
      }
   },
   'categoryStyles': {
      'video_category': {
         'colour': '200'
      },
      'control_category': {
         'colour': '50',
      },
      'sprite_category': {
         'colour': '250'
      }
    }
});
