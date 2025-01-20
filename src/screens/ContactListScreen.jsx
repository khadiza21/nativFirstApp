import { FlatList, Text } from 'react-native';
import React from 'react';
import ContactItem from '../components/ContactItem';
import { users } from './userContactInfo';
import { styles } from './styles';



const ContactListScreen = () => {
    const renderItem = ({ item }) => <ContactItem name={item.name} email={item.email} />;
    return (

        <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            ListHeaderComponent={<Text style={styles.heading} >Contacts</Text>}
        />

    );
};

export default ContactListScreen;
