
const parent = React.createElement('div',{id:'parent'},
    [
        React.createElement('div', {id:'child1'}, 
            [
                React.createElement('h1',{}, "im an h1 tag"),
                React.createElement('h2',{}, "im an h2  tag")
            ]
        ),
        React.createElement('div', {id:'child2'}, 
            [
                React.createElement('h1',{}, "im an h1 tag"),
                React.createElement('h2',{}, "im an h2  tag")
            ]
        )
     ]
); 



// const heading = React.createElement('h1', { id: 'heading' , xyz:'abc'}, "hello From react again");

console.log(parent)
 
const root = ReactDOM.createRoot(document.getElementById('root'))
