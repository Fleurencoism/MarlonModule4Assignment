import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Meeting = props => {

    const post = props.post;
    
    const onPress = () => {
        console.log(post.name);
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 1}}>
                <Text style={styles.titleLabel}>Title</Text>
                <Text style={styles.locationLabel}>Location</Text>
                <Text style={styles.dateLabel}>Date</Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
                <Text style={styles.location} numberOfLines={1}>{post.location}</Text>
                <Text style={styles.date} numberOfLines={1}>{post.date}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Meeting;