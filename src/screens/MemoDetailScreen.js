import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>ショップ</Text>
              <Text style={styles.memoHeaderDate}>2018/05/07</Text>
            </View>
          </View>
        </View>

          <View style={styles.memoContent}>
            <Text>
              ショップを紹介致します。
            </Text>
          </View>

        <CircleButton color="white" style={styles.editButton}>+</CircleButton>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#FFF',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFF',
    paddingBottom: 20,
    flex: 1,
  },
  editButton: {
    top: 75,
  },

});

export default MemoDetailScreen;
