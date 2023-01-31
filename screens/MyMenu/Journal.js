import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert, ScrollView, KeyboardAvoidingView, TextInput} from 'react-native';
import Folder from './JournalFolder/Folder';
import { Overlay } from 'react-native-elements';

function Journal({navigation})
{
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    
    //adding a task/Folder
    const handleAddTask = () => {
        setTaskItems([...taskItems, task])
        setTask[null];
        setVisible(!visible);
    }

    //deleting a task/folder
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
        setVisible2(!visible2);
    }

    //Overlay
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const toggleOverlay2 = () => {
        setVisible2(!visible2);
    };

    //checkbox
    const [checked, setChecked] = useState(false);




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
                                {
                                    // completeTask(index)
                                    taskItems.map((item, index) => {
                                        return(
                                            <Pressable key={index} onPress={() => navigation.navigate('FolderContent')}>
                                                <Folder  text={item}/>
                                            </Pressable>
                                        ) 
                                    })
                                }
                            
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
                        {/* onPress={() => handleAddTask()} */}
                            <Pressable onPress={toggleOverlay}>
                                <Image source={require('../../images/Tabs/Menu/MyJournal/addButton.png')}/>
                            </Pressable>
                        </View>
                        <View style={styles.deleteButton}>
                            <Pressable onPress={toggleOverlay2}>
                                <Image source={require('../../images/Tabs/Menu/MyJournal/deleteButton.png')}/>
                            </Pressable>
                        </View>
                    </View>
                    {/* for adding a folder */}
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={styles.overlay}>
                            <View style={styles.createFolderImageView}>
                                <Image source={require('../../images/Tabs/Menu/MyJournal/createFolder.png')}
                                />
                            </View>
                            <View>
                                <View style={styles.addFolderInput}>
                                    <KeyboardAvoidingView 
                                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                                    >
                                        <TextInput placeholder='Folder Name' placeholderTextColor="#5E5E5E" value={setTask} onChangeText={text => setTask(text)} style={{fontWeight: '500', height: 25, width: 121, fontSize: 21, marginLeft: 10, lineHeight: 25}}/>
                                    </KeyboardAvoidingView>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                <Image source={require('../../images/Tabs/Menu/MyJournal/textInputLine.png')}
                                />
                                </View>
                            </View>
                            <Pressable onPress={() => handleAddTask()}>
                                <View style={styles.createFolderView}>
                                    <Text style={styles.createFolderTextCreate}>Create Folder</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setVisible(!visible)}>
                                <Text style={styles.createFolderTextCancel}>Cancel</Text>
                            </Pressable>
                        </View>
                    </Overlay>
                        

                    

                    {/* for deleting a */}
                    
                    
                    <Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
                    <ScrollView>
                    {
                    // completeTask(index)
                    taskItems.map((item, index) => {
                        return(
                            
                        <View style={styles.overlay}>
                            <View style={styles.createFolderImageView}>
                                <Image source={require('../../images/Tabs/Menu/MyJournal/deleteFolder.png')}
                                />
                            </View>
                            <View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontSize: 21, fontWeight: '500'}}>Are you sure you want to delete this folder <Text>{item}</Text>?</Text>
                                </View>
                            </View>
                            
                            <Pressable onPress={() => completeTask(index)}>
                                <View style={styles.deleteFolderView}>
                                    <Text style={styles.createFolderTextCreate}>Delete</Text>
                                </View>
                            </Pressable>
                            
                            <Pressable onPress={() => setVisible2(!visible2)}>
                                <Text style={styles.createFolderTextCancel}>Cancel</Text>
                            </Pressable>
                            <View>
                                <Image source={require('../../images/Tabs/Menu/MyJournal/textInputLine.png')}
                                
                                />
                            </View>
                        </View>
                        
                        ) 
                    })
                        }
                        </ScrollView>
                    </Overlay>
                    
                    
                            
                    
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
    },
    folderPart: {
        flex: 28,
    },
    buttonsPart: {
        flex: 23,
        alignItems: 'flex-end',
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
    },
    overlay: {
        alignItems: 'center',
    },
    createFolderImageView: {
        backgroundColor: 'rgb(217, 217, 217)',
        width: 122,
        height: 122,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginVertical: 20
    },
    addFolderInput: {
        marginRight: 140

    },
    createFolderView: {
        backgroundColor: 'black',
        borderRadius: 13,
        width: 274,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    createFolderTextCreate: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white'
    },
    createFolderTextCancel: {
        fontWeight: '500',
        fontSize: 21,
        color: 'rgb(107, 65, 152)',
        textDecorationLine: 'underline',
        marginBottom: 20
    },
    deleteFolderView: {
        backgroundColor: 'rgb(143, 24, 24)',
        borderRadius: 13,
        width: 274,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    }
})

export default Journal