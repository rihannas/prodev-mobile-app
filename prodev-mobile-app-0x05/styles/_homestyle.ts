import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchGroup: {
    marginVertical: 10,
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchControlGroup: {
    flex: 1,
  },
  searchControl: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#34967C',
    padding: 10,
    borderRadius: 8,
  },
  filterGroup: {
    flexDirection: 'row',
    padding: 10,
  },
  filterContainer: {
    marginRight: 12,
    alignItems: 'center',
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  paginationContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  showMoreButton: {
    backgroundColor: '#34967C',
    padding: 12,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export { styles };
