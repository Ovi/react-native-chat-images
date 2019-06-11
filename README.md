# react-native-chat-images

> A **React Native** library to show images grid in chat messages like your favorite platforms! (WhatsApp, Messenger)

[![NPM](https://img.shields.io/npm/v/react-native-chat-images.svg)](https://www.npmjs.com/package/react-native-chat-images)
[![NPM](https://img.shields.io/github/license/ovi/react-native-chat-images.svg)](https://www.npmjs.com/package/react-native-chat-images)

<p align="center">
    <img alt="react-native-chat-images" src="preview/sample.gif" width="260" height="510" />
 </a>

</p>

<h3 align="center">
  React Native Chat Images
</h3>

<p align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=exp://expo.io/@muhammadovi/react-native-chat-images">
  <br>
  <a href="https://snack.expo.io/@muhammadovi/react-native-chat-images" target="_blank"><i>demo</i> <small> (expo)</small></a>
</p>

## Install

```bash
npm i -S react-native-chat-images
```

OR

```bash
yarn add react-native-chat-images
```

## Usage

![Example Code](/preview/usage.png)

## Props

| Props                                         |                                                          Type                                                          |    Default     |               Example                |
| :-------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------: | :------------: | :----------------------------------: |
| [images](#props--images--array-of-objects) \* | array of [strings](#prop--images-array-of-strings) <br /> OR <br /> array of [objects](#prop--images-array-of-objects) |  **required**  |         [Samples](#samples)          |
| extra                                         |                                                         string                                                         |  `undefined`   |             `'03:30 AM'`             |
| title                                         |                                                         string                                                         |  `undefined`   |         `'Title of Images'`          |
| style                                         |                                                         object                                                         |      `{}`      |                                      |
| backgroundColor                               |                                                         string                                                         | `'lightgreen'` | `'red'` <br /> OR <br /> `'#ff0000'` |
| width                                         |                                             string <br /> OR <br /> number                                             |    `'100%'`    |    `'50%'` <br /> OR <br /> `360`    |
| saveOnLongPress                               |                                                          bool                                                          |     `true`     |   `true` <br /> OR <br /> `false`    |

> **\*** if you pass array of objects you may also provide some extra information: see > [Image Props](#props--images--array-of-objects)

### Examples

#### Prop > images (array of strings)

```jsx
import React, { Component } from 'react';
import { View } from 'react-native';
import Images from 'react-native-chat-images';

export default class App extends Component {
  state = {
    images: ['img_01', 'img_02', 'img_03', '...'],
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Images images={this.state.imgs} />
      </View>
    );
  }
}
```

#### Prop > images (array of objects)

```jsx
import React, { Component } from 'react';
import { View } from 'react-native';
import Images from 'react-native-chat-images';

export default class App extends Component {
  state = {
    images: [{ url: 'img_01' }, { url: 'img_02' }, { url: 'img_03' }, { url: '...' }],
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Images images={this.state.imgs} />
      </View>
    );
  }
}
```

## Props > images > array of objects

| Props        |         Type         | Required |
| :----------- | :------------------: | :------: |
| url          |    string (`url`)    | **yes**  |
| thumbnail    |    string (`url`)    |    no    |
| caption      |        string        |    no    |
| captionStyle |        object        |    no    |
| overlay      | `ReactNativeElement` |    no    |

## Samples

![Example Code](/preview/1.jpg)
![Example Code](/preview/2.jpg)
![Example Code](/preview/3.jpg)

## License

MIT © [Ovi](https://github.com/Ovi) | [License](/LICENSE)
