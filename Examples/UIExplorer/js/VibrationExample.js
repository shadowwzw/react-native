/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Vibration,
  Platform,
} = ReactNative;

exports.framework = 'React';
exports.title = 'Vibration';
exports.description = 'Vibration API';

var pattern, patternLiteral, patternDescription;
if (Platform.OS === 'android') {
  pattern = [0, 500, 200, 500];
  patternLiteral = '[0, 500, 200, 500]';
  patternDescription = `${patternLiteral}
arg 0: duration to wait before turning the vibrator on.
arg with odd: vibration length.
arg with even: duration to wait before next vibration.
`;
} else {
  pattern = [0, 1000, 2000, 3000];
  patternLiteral = '[0, 1000, 2000, 3000]';
  patternDescription = `${patternLiteral}
vibration length on iOS is fixed.
pattern controls durations BETWEEN each vibration only.

arg 0: duration to wait before turning the vibrator on.
subsequent args: duration to wait before next vibrattion.
`;
}

exports.examples = [
  {
    title: 'Pattern Descriptions',
    render() {
      return (
        <View style={styles.wrapper}>
          <Text>{patternDescription}</Text>
        </View>
      );
    },
  },
  {
    title: 'Vibration.vibrate()',
    render() {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate()}>
          <View style={styles.button}>
            <Text>Vibrate</Text>
          </View>
        </TouchableHighlight>
      );
    },
  },
  {
    title: `Vibration.vibrate(${patternLiteral})`,
    render() {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate(pattern)}>
          <View style={styles.button}>
            <Text>Vibrate once</Text>
          </View>
        </TouchableHighlight>
      );
    },
  },
  {
    title: `Vibration.vibrate(${patternLiteral}, true)`,
    render() {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate(pattern, true)}>
          <View style={styles.button}>
            <Text>Vibrate until cancel</Text>
          </View>
        </TouchableHighlight>
      );
    },
  },
  {
    title: 'Vibration.cancel()',
    render() {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.cancel()}>
          <View style={styles.button}>
            <Text>Cancel</Text>
          </View>
        </TouchableHighlight>
      );
    },
  },
];

var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});
