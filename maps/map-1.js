/**
 * Created by Vadym Yatsyuk on 25/02/16
 */
import Enemy from './../Entities/Enemy'
import Weapon from './../Entities/Weapon'
import Health from './../Entities/Health'
import {getRandomEmptyPointOnMap} from './../utils'

let randomPoint
let data = {
  startPosition: {
    x: 1,
    y: 1
  },
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
}

var objects = [new Enemy(1, 20), new Enemy(1, 20), new Enemy(1, 10), new Weapon('Knife', 10), new Health()]
// set objects on map
objects.forEach(function (object) {
  randomPoint = getRandomEmptyPointOnMap(data.map)
  data.map[randomPoint.y][randomPoint.x] = object
})

export default data

