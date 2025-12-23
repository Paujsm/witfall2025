//another way to export

module.exports = {
    studied: ['Python3', 'html', 'Css', 'Bootstrap'],
    display: function(){
        this.studied.forEach(item => console.log(item))
    }
}

