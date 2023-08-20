import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  boxContainer: {
    backgroundColor: '#ffffff', // Background color of the box , white
    borderRadius: 10, // Rounded corners
    margin: 10,
    padding: 20, // Padding inside the box
    shadowColor: '#000000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android shadow elevation
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: '#4A4A4A',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#FF6F61',
    marginBottom: 20,
  },
  bodyText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#4A4A4A',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    flex: 1,
    height: 40, // Adjust the height value to make the input taller
    borderWidth: 0,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  searchBarContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  itemCode: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '600',
    fontSize: 12,
    color: 'white',
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: '#43A047',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});


