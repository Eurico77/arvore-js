
let arvore = {

    left: {

        left: undefined,

        right: {

            value: 3

        },

        value: 2

    },

    right: undefined,

    value: 10

}


function preOrder(tree) {

    console.log(tree.value)

    tree.left && preOrder(tree.left)

    tree.right && preOrder(tree.right)

}

console.log('preOrder')

preOrder(arvore)



function inOrder(tree) {

    tree.left && inOrder(tree.left)

    console.log(tree.value)

    tree.right && inOrder(tree.right)

}

console.log('inOrder')

inOrder(arvore)