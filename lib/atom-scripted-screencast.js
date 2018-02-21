'use babel'

import { CompositeDisposable } from 'atom'

export default {

  atomScriptedScreencastView: null,
  modalPanel: null,
  subscriptions: null,
  screenRecorder: null,

  activate(state) {
    console.log('activating the scripted caster')
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-scripted-screencast:start': () => this.start()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  serialize() {
    return {}
  },

  async start() {
    console.log('AtomScriptedScreencast has been started!')

    const timer = ms => new Promise( res => setTimeout(res, ms))

    this.screenRecorder.recordActiveTexteditor()

    await timer(2000)

    this.screenRecorder.stopRecording()

    return true
  },

  consumeScreenRecorder(screenRecorder) {
    console.log('screenRecorder', screenRecorder)
    this.screenRecorder = screenRecorder
  }

}
