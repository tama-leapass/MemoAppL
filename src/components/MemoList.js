import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (

      <View style={styles.memoList}>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>ショップ</Text>
          <Text style={styles.memoDate}>2018/05/07</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>トピックス</Text>
          <Text style={styles.memoDate}>2018/05/07</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>ゲストトーク</Text>
          <Text style={styles.memoDate}>2018/05/07</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>ニューフェース</Text>
          <Text style={styles.memoDate}>2018/05/07</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>お店情報</Text>
          <Text style={styles.memoDate}>2018/05/07</Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  memoList: {
    width: '100%',
    flex: 1,
  },

  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },

  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },

  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },

});

export default MemoList;
