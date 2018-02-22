# atom-scripted-screencast package

Use lexcast/screen-recorder and aoloe/autotype to create a gif screencast.

![A screenshot of your package](https://f.cloud.github.com/assets/69169/2290250/c35d867a-a017-11e3-86be-cd7c5bf3ff9b.gif)

## Notes

dispatching commands:

- http://drorata.github.io/posts/2017/Jan/20/my-getting-started-with-atom/index.html

Status:
- https://discuss.atom.io/t/providedservices-not-working-with-activationcommands/21059
- https://discuss.atom.io/t/providing-a-service-to-another-package/52657/4

- http://flight-manual.atom.io/behind-atom/sections/interacting-with-other-packages-via-services/
- <http://flight-manual.atom.io/hacking-atom/sections/package-word-count/#the-flow>: the activation flow
- https://atom.io/docs/api/v1.24.0/PackageManager#instance-isPackageActive
- https://discuss.atom.io/t/using-a-service-from-another-package/20645/3
- https://github.com/atom/status-bar/ is a good example of provider and is even consumed by https://github.com/lexcast/screen-recorder
- http://coffeescript.org for checking what js code is produced by coffeescript
- <https://gist.github.com/jbrains/c2c7f2a3b1f8240013fc#file-status-stats-spec-coffee-L15>: forcing the activation of a package (but it does not seem to work for me)


## Todo

- limit he size of the screencast (warn if it's too big)
- automatically stop after n seconds
