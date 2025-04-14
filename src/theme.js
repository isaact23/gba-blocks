import * as Blockly from 'blockly/core';

export const theme = Blockly.Theme.defineTheme('mainTheme', {
   'base': Blockly.Themes.Classic,
   'blockStyles': {
      'video_blocks': {
         'colourPrimary': '200'
      },
      'control_blocks': {
         'colourPrimary': '50'
      }
   },
   'categoryStyles': {
      'video_category': {
         'colour': '200'
      },
      'control_category': {
         'colour': '50',
      }
    }
});
