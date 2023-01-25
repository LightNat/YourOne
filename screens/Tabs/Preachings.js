import { StyleSheet, Text, View, ScrollView, Button, Image, ImageBackground ,Pressable, Alert, FlatList } from 'react-native';

const Videoscreen1 = ({navigation}) => {
	return (
        <View>
            <View>
					<Text style = {styles.titlehead1}>Preachings</Text>
	 		</View>
                <View style={styles.underline1}>
					<Image source={require('../../images/Tabs/Preachings/underline.png')}
					 style={{width: 155, height: 9, borderRadius: 5, marginLeft: 38}}/>
			    </View>
         
		    <ScrollView>
                
			    <View style ={styles.container}>
					{/* first Row */}
						<View style ={styles.containerPic1}>   
							<View styles ={styles.stevendesign}>
								<ImageBackground source={require('../../images/Tabs/Preachings/steven.png')}
									style = {styles.stevenpicdedsign}>
									<Pressable onPress={() => navigation.navigate('Videoscreen2')}>
										<Text style={styles.stevenname}>Steven Furtick</Text>
									</Pressable>
								</ImageBackground>

							</View>
								
								<View styles ={styles.sarahdesign}>
									<ImageBackground source={require('../../images/Tabs/Preachings/sarah.png')}
										style = {styles.sarahpicdedsign}>
										<Pressable onPress={() => console.warn("Sarah Jakes Roberts")}>
											<Text style={styles.sarahname}>Sarah Jakes Roberts</Text>
										</Pressable>
									</ImageBackground>
								</View> 

						</View>
							{/* Second Row */}
								<View style ={styles.containerPic2}>   

									<View styles ={styles.charlesdesign}>
										<ImageBackground source={require('../../images/Tabs/Preachings/charles.png')}
											style = {styles.charlespicdesign}>
											<Pressable onPress={() => console.warn("Charles Swindoll")}>
												<Text style={styles.charlesname}>Charles Swindoll</Text>
											</Pressable>
										</ImageBackground>
									</View>

										<View styles ={styles.rickdesign}>
											<ImageBackground source={require('../../images/Tabs/Preachings/rick.png')}
											style = {styles.rickpicdedsign}>
											<Pressable onPress={() => console.warn("Rick Warren")}>
											<Text style={styles.rickname}>Rick Warren</Text>
											</Pressable>
											</ImageBackground>
										</View> 
									</View>

									{/* third Row */}
									<View style ={styles.containerPic3}>  
									<View styles ={styles.johndesign}>
									<ImageBackground source={require('../../images/Tabs/Preachings/john.png')}
									style = {styles.johnpicdesign}>
									<Pressable onPress={() => console.warn("John MacArthur")}>
									<Text style={styles.johnname}>John MacArthur</Text>
									</Pressable>
									</ImageBackground>
									</View>

									<View styles ={styles.joycedesign}>
									<ImageBackground source={require('../../images/Tabs/Preachings/joyce.png')}
									style = {styles.joycepicdedsign}>
									<Pressable onPress={() => console.warn("Joyce Meyer")}>
									<Text style={styles.joycename}>Joyce Meyer</Text>
									</Pressable>
									</ImageBackground>
									</View> 
									</View>	

									<View style ={styles.containerPic3}>  
									<View styles ={styles.johndesign}>
									<ImageBackground source={require('../../images/Tabs/Preachings/steven.png')}
									style = {styles.johnpicdesign}>
									<Pressable onPress={() => console.warn("Lorem Ipsum")}>
									<Text style={styles.johnname}>Lorem Ipsum</Text>
									</Pressable>
									</ImageBackground>
									</View>

									<View styles ={styles.joycedesign}>
									<ImageBackground source={require('../../images/Tabs/Preachings/sarah.png')}
									style = {styles.joycepicdedsign}>
									<Pressable onPress={() => console.warn("Lorem Ipsum")}>
									<Text style={styles.joycename}>Lorem Ipsum</Text>
									</Pressable>
									</ImageBackground>
									</View> 
									</View>	

			 	</View>
		    </ScrollView>
        </View>
	);
}

const styles = StyleSheet.create({
 container:{
	flex: 1,
	backgroundColor: 'white',
	justifyContent: 'space-evenly',
    },
	 containerPic1:{
	 flexDirection: 'row',
	 marginLeft: 8,
     marginTop: 1,	
	},
	containerPic2:{
		flexDirection: 'row',
		marginLeft: 8,	
		marginTop: 4,	
		},
	containerPic3:{
		flexDirection: 'row',
		marginLeft: 8,	
		marginTop: 4,	
			},	
	titlehead1:{
        marginTop: 20,
        marginLeft: 15,
		fontSize: 30,
		paddingTop: "5%",
		paddingLeft: "6%",
		color: 'black',
		fontWeight: 'bold',
		 //steven
	},
	stevenpicdedsign:{
		resizeMode: "contain",
		marginTop: 29,
		width: 150, 
		height: 200,
		border: 60, 
		marginLeft: 21,
		
	},
	stevendesign:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'gray'
	},
	 stevenname:{
		paddingTop: 3,
		marginTop: 162,
		marginLeft: 10,
		backgroundColor: '#D9D9D9',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 13,
		width: 100,
		height: 27,
		borderRadius: 10,
	 },
	 //sarah
	 sarahpicdedsign:{
		resizeMode: "contain",
		marginTop: 29,
		marginLeft: 200,
		width: 150, 
		height: 200,
		border: 60, 
		marginLeft: 21,
		
	},
	sarahdesign:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'gray'
	},
	 sarahname:{
		paddingTop: 3,
		marginTop: 162,
		marginLeft: 10,
		backgroundColor: '#D9D9D9',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 13,
		width: 130,
		height: 27,
		borderRadius: 10,
	},
	 //charles
	 charlespicdesign:{
		resizeMode: "contain",
		marginTop: 2,
		marginLeft: 200,
		width: 150, 
		height: 200,
		border: 60, 
		marginLeft: 21,
		
	},
	charlesdesign:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'gray'
	},
	charlesname:{
		paddingTop: 3,
		marginTop: 162,
		marginLeft: 10,
		backgroundColor: '#D9D9D9',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 13,
		width: 112,
		height: 27,
		borderRadius: 10,
	},
	//rick
	rickpicdedsign:{
		resizeMode: "contain",
		marginTop: 2,
		marginLeft: 200,
		width: 150, 
		height: 200,
		border: 60, 
		marginLeft: 21,
		
	},
	rickdesign:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'gray'
	},
	rickname:{
		paddingTop: 3,
		marginTop: 162,
		marginLeft: 10,
		backgroundColor: '#D9D9D9',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 13,
		width: 90,
		height: 27,
		borderRadius: 10,
	},
	// john
	johnpicdesign:{
		resizeMode: "contain",
		marginTop: 2,
		marginLeft: 200,
		width: 150, 
		height: 200,
		border: 60, 
		marginLeft: 21,
		
	},
	johndesign:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'gray'
	},
	johnname:{
		paddingTop: 3,
		marginTop: 162,
		marginLeft: 10,
		backgroundColor: '#D9D9D9',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 13,
		width: 107,
		height: 27,
		borderRadius: 10,
	},
	// joyce
	joycepicdedsign:{
		resizeMode: "contain",
		marginTop: 2,
		marginLeft: 200,
		width: 150, 
		height: 200,
		border: 60, 
		marginLeft: 21,
		
	},
	joycedesign:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'gray'
	},
	joycename:{
		paddingTop: 3,
		marginTop: 162,
		marginLeft: 10,
		backgroundColor: '#D9D9D9',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 13,
		width: 90,
		height: 27,
		borderRadius: 10,
	},

});
export default Videoscreen1;