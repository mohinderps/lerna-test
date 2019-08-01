var root = document.body;

var whereToRender = root;

var whatToRender = m('main', [
    m('h1', {class: 'title'}, 'My first app'),
    m('button', 'A button')
]);

var count = 0;

var Hello = {
    view: function() {
        return m('main', [
            m('h1', {class: 'title'}, 'Hello Worlds'),
            m('button', {onclick: function() {count ++}},count + ' clicks')
        ])
    }
}

// m.render(root, whatToRender);

m.mount(root, Hello);