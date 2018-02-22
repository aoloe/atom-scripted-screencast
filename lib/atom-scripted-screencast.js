'use babel'

import { CompositeDisposable } from 'atom'

export default {

  atomScriptedScreencastView: null,
  modalPanel: null,
  subscriptions: null,
  screenRecorder: null,
  waitTask: false,

  activate(state) {
    console.log('activating the scripted caster')
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // if (!atom.packages.isPackageActive('status-bar')) {
      pack = atom.packages.loadPackage('status-bar')
      console.log('pack', pack)
      if (pack) {
        pack.activateNow()
      }
    // }

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

    // this.screenRecorder.recordActiveTexteditor()
    console.log('--- starting ---')
    editor = atom.workspace.getActiveTextEditor()
    atom.commands.dispatch(atom.views.getView(editor), 'screen-recorder:record-active-texteditor')

    console.log('--- recording ---')

    // await timer(8000)
    // atom.commands.dispatch(atom.views.getView(editor), 'atom-autotype:start')

    // this.waitTask = true
    atom.commands.dispatch(atom.views.getView(editor), 'atom-autotype:start')
    // atom.commands.onDidDispatch(this.stop.bind(this))  // work-around the synch issue

    // console.log('--- stopping ---')
    // this.screenRecorder.stopRecording()
    // atom.commands.dispatch(atom.views.getView(editor), 'screen-recorder:stop-recording')

    return true
  },

  /*
  stop() {
    console.log('stop?', this.waitTask)
    if (this.waitTask) {
      console.log('--- stopping ---')
      // this.screenRecorder.stopRecording()
      atom.commands.dispatch(atom.views.getView(editor), 'screen-recorder:stop-recording')
      this.waitTask = false
    }
  },
  */

  consumeStatusBar(statusBar) {
    console.log('statusBar', statusBar)
  },

  consumeScreenRecorder(screenRecorder) {
    console.log('screenRecorder', screenRecorder)
    this.screenRecorder = screenRecorder
  }

}
