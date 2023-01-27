import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert, ScrollView, KeyboardAvoidingView, TextInput} from 'react-native';
import Folder from './JournalFolder/Folder';

function Journal({navigation})
{
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    
    const handleAddTask = () => {
        setTaskItems([...taskItems, task])
        setTask[null];
    }

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.page}>
                <View style={styles.headerPart}>
                    <View style={styles.backButtonView}>
                        <Pressable onPress={() => navigation.navigate('HamburgerMenu')}>
                            <Image source={require('../../images/Tabs/Menu/MyJournal/backArrow.png')}/>
                        </Pressable>
                    </View>
                    <View style={styles.headerView}>
                        <Text style={styles.headerText}>My Journal</Text>
                        <Image source={require('../../images/Tabs/Menu/MyJournal/lineHeader.png')}/>
                    </View>
                    <View style={styles.journalIcon}>
                        <Image source={require('../../images/Tabs/Menu/MyJournal/journalIcon.png')}/>
                    </View>
                </View>
                <View style={styles.folderPart}>
                    <View style={styles.folders}>
                        <ScrollView>
                            <Pressable onPress={() => navigation.navigate('FolderContent')}>
                                {
                                    taskItems.map((item) => {
                                        return <Folder  text={item}/>
                                    })
                                }
                            </Pressable>
                            {/* <Pressable onPress={() => navigation.navigate('FolderContent')}>
                                <Folder text={'Bible Class'} />
                            </Pressable>
                            <Pressable onPress={() => Alert.alert('Prayer')}>
                                <Folder text={'Prayer'} />
                            </Pressable>
                            <Pressable onPress={() => Alert.alert('My Day')}>
                                <Folder text={'My Day'} />
                            </Pressable>
                            <Pressable onPress={() => Alert.alert('Task 4')}>
                                <Folder text={'Task 4'} />
                            </Pressable> */}
                        </ScrollView>
                    </View>
                    
                </View>
                <View style={styles.buttonsPart}>
                    <View style={styles.buttons}>
                        <View>
                            <Pressable onPress={() => handleAddTask()}>
                                <Image source={require('../../images/Tabs/Menu/MyJournal/addButton.png')}/>
                            </Pressable>
                        </View>
                        <View style={styles.deleteButton}>
                            <Pressable onPress={() => Alert.alert('Delete Folder')}>
                                <Image source={require('../../images/Tabs/Menu/MyJournal/deleteButton.png')}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <KeyboardAvoidingView 
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <TextInput placeholder='Add Folder' value={task} onChangeText={text => setTask(text)}/>
                    </KeyboardAvoidingView>
                </View>
                
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: 395,
        marginTop: 30,
    },
    backButtonView: {
        marginLeft: 20,
        marginTop: 30
    },
    headerView: {
        alignItems: 'center',
        marginTop: -30
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
    },
    journalIcon: {
        alignItems: 'center',
        marginTop: 60
    },
    folders: {
        alignItems: 'center'
    },
    headerPart: {
        flex: 49,
        backgroundColor: 'pink'
    },
    folderPart: {
        flex: 28,
        backgroundColor: 'orange'
    },
    buttonsPart: {
        flex: 23,
        alignItems: 'flex-end',
        backgroundColor: 'pink',
    },
    buttons: {
        marginTop: 20,
        marginRight: 10
    },
    deleteButton: {
        paddingVertical: 14,
        backgroundColor: 'rgb(143, 24, 24)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginRight: 5 
    }
})

export default Journal