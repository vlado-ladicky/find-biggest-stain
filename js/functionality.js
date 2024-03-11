const { createApp } = Vue

createApp({
  data: _ => ({
    height: 7,
    width: 5,
    table: [],
    stains: []
  }),

  watch: {
    height: 'createTable',
    width: 'createTable'
  },

  methods: {
    createTable () {
      this.stains = []

      this.table = Array.from(
        { length: +this.height },
        () => Array(+this.width).fill(0)
      )
    },

    toggle (row, col) {
      this.table[row][col] = +!this.table[row][col]
      return true
    },

    resolve () {
      this.stains = []

      this.table.forEach((line, row) => {
        line.forEach((isDirty, col) => isDirty &&
          !this.isPartOfStain(row, col) &&
          this.addStain(row, col)
        )
      })

      this.$nextTick(() => this.highlightBig())
    },

    isPartOfStain (row, col) {
      let res = false

      this.stains.forEach(stain => {
        stain.forEach(coords => {
          if (coords[0] === row && coords[1] === col) res = true
        })
      })

      return res
    },

    addStain (row, col) {
      this.stains.push([[row, col]])
      this.addAdjacent(row, col, this.stains.length - 1)
    },

    addToStain (stainIndex, coords) {
      this.stains[stainIndex].push([coords[0], coords[1]])
      this.addAdjacent(coords[0], coords[1], stainIndex)
    },

    isSpilled (coords) {
      return coords[0] > -1 && coords[1] > -1 &&
        coords[0] < this.height && coords[1] < this.width &&
        this.table[coords[0]][coords[1]] === 1
    },

    addAdjacent (row, col, stainIndex) {
      const adjacent = [
        [row - 1, col - 1], [row - 1, col], [row - 1, col + 1],
        [row, col - 1], [row, col + 1],
        [row + 1, col - 1], [row + 1, col], [row + 1, col + 1]
      ]
      
      adjacent.forEach(coords => this.isSpilled(coords) &&
        !this.isPartOfStain(coords[0], coords[1]) &&
        this.addToStain(stainIndex, coords)
      )
    },

    highlightBig () {
      const biggest = Math.max(...this.stains.map(stain => stain.length))

      this.stains.forEach(stain => {
        if (stain.length === biggest) {
          stain.forEach(coords => {
            this.$refs[`cell-${coords[0]}-${coords[1]}`][0].style.backgroundColor = 'green'
          })
        }
      })
    }
  },

  created () {
    this.createTable()
  }
}).mount('#app')
