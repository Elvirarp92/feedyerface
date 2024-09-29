import { defineStore } from 'pinia'
import idb from '../database/idb'

export const useIndexedDatabaseStore = defineStore('indexedDatabase', {
  state: () => ({
    feeds: []
  }),

  actions: {
    async readFeeds() {
      this.feeds = []
      const feeds = await idb.readFeeds()
      this.feeds = feeds
    },

    async createFeed(feed) {
      // we have a required attribute in the HTML but just in case
      if (!feed.url || !feed.title) return

      await idb.createFeed(feed)

      this.readFeeds()
    },

    async deleteFeed(feed) {
      await idb.deleteFeed(feed)
      this.readFeeds()
    }
  }

})
