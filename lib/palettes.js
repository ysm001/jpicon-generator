const presets = [
  {name: 'pattern1', color: '#fcbf00', bgcolor: '#d0104c'},
  {name: 'pattern2', color: '#e0d1b8', bgcolor: '#488970'},
  {name: 'pattern3', color: '#226a6f', bgcolor: '#e0ad3f'},
  {name: 'pattern4', color: '#19130a', bgcolor: '#f7b915'},
  {name: 'pattern5', color: '#efd8bb', bgcolor: '#debb7d'},
  {name: 'pattern6', color: '#efdae8', bgcolor: '#67235e'},
  {name: 'pattern7', color: '#ccc4c2', bgcolor: '#505657'},
  {name: 'pattern8', color: '#e41c19', bgcolor: '#d49734'},
  {name: 'pattern9', color: '#fae5da', bgcolor: '#cd5742'},
  {name: 'pattern10', color: '#c4b44c', bgcolor: '#171409'}
];

module.exports = {
  presets: presets,
  find: name => presets.find(palette => palette.name === name)
};
