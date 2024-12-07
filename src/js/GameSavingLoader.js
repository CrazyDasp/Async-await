import read from './reader';
import json from './parser';

class GameSaving {
  constructor({ id, created, userInfo }) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read()
      const jsonString = await json(data)
      const parsedData = JSON.parse(jsonString)
      return new GameSaving(parsedData)
    } catch (error) {
      throw new Error(`Error load files: ${error.message}`)
    }
  }
}
