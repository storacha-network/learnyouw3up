import * as Client from '@web3-storage/w3up-client'
import { filesFromPaths } from 'files-from-path'

const client = await Client.create()
const files = await filesFromPaths(['./lost-dog.jpg'])
const root = await client.uploadDirectory(files, {
  onShardStored: shard => console.log(shard.cid.toString())
})

console.log(root.toString())
