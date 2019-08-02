import m from 'mithril';
import User from '../models/User';

export default {
    oninit: function(vnode) {
        User.load(vnode.attrs.id);
    },
    view: function() {
        return m("form", {onsubmit: function(e) {e.preventDefault(); User.save()}}, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {value: User.current.firstName, oninput: function(e){ User.current.firstName = e.target.value}}),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {value: User.current.lastName, oninput: function(e){ User.current.lastName = e.target.value}}),
            m("button.button[type=submit]", "Save"),
        ])
    }
}