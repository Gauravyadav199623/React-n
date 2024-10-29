module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-react',{ runtime : "automatic"}]
      //babel/preset-react is helping the testing library to convert the jsx code in to html code so that it can read properly
    
    ],
    
  };