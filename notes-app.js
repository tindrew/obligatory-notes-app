const notes = [ {
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]
//*********code to display todos and filter them onscreen */
const filters = {
    searchText: ''
}


const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })


    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)



//select button and add a listener for click
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function ( note) {
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// add an id onto add todo button and target by ID instead of tag name
















// const ps = document.querySelectorAll('p')

// ps.forEach(function(p) {
//     p.textContent = '*********'
//     // console.log(p.textContent)
//     // p.remove()
// })

// // add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from javascript'
// document.querySelector('body').appendChild(newParagraph)