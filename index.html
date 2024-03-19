<!DOCTYPE html>

<html lang="sk">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Nájdi najväčšiu škvrnu</title>

    <link rel="stylesheet" href="css/style.css">
    <script src="https://unpkg.com/vue@3/dist/vue.global.js" defer></script>
    <script src="js/functionality.js" defer></script>
  </head>

  <body>
    <header>
      <h1>Nájdi najväčšiu škvrnu na stole.</h1>
    </header>

    <main id="app">
      <fieldset>
        <legend>Rozmery stola</legend>

        <label for="height">Výška stola: </label>
        <input type="range" id="height" min="5" max="9" step="1" v-model="height">
        <br>
        <label for="width">Šírka stola: </label>
        <input type="range" id="width" min="5" max="9" step="1" v-model="width">
      </fieldset>

      <table v-cloak>
        <tr v-for="(line, row) in table" :key="row">
          <td
            v-for="(isDirty, col) in line" :key="col"
            @click="toggle(row, col) && resolve()"
            :ref="`cell-${row}-${col}`"
            :style="{
              color: isDirty ? 'white' : 'black',
              backgroundColor: isDirty ? 'brown' : 'transparent'
            }"
          >{{ table[row][col] }}</td>
        </tr>
      </table>

      <h4 v-if="!stains.length" v-cloak>Vyklikaj si vlastné škvrny na stole.</h4>
      <h4 v-else v-cloak>Počet škvŕn na stole: {{ stains.length }}</h4>
    </main>
  </body>
</html>
