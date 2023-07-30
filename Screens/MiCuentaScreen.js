import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MiCuentaScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.section, styles.header]}>
        <Icon name="person-circle-outline" size={80} color="#f10404" />
        <Text style={styles.username}>Nombre de Usuario</Text>
      </View>
      <View style={[styles.section, styles.deseos]}>
        <Text style={styles.sectionTitle}>Lista de Deseos</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => alert('Visualiza tus articulos guardados anteriormente')}>
            <View style={styles.iconContainer}>
              <Icon name="bookmark-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Guardados</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Todos tus articulos que seguiste una vez estan aqui')}>
            <View style={styles.iconContainer}>
              <Icon name="person-add-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Siguiendo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Historial')}>
            <View style={styles.iconContainer}>
              <Icon name="time-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Historial</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Aplica tusCupones')}>
            <View style={styles.iconContainer}>
              <Icon name="pricetag-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Cupones</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: 'https://i.postimg.cc/JzKv994G/b1.png' }} style={styles.bannerImage} />
      </View>
      <View style={[styles.section, styles.compras]}>
        <Text style={styles.sectionTitle}>Tus Compras</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => alert('Encuentra todos tus Pedidos')}>
            <View style={styles.iconContainer}>
              <Icon name="receipt-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Sigue tus pedidos en esta seccion')}>
            <View style={styles.iconContainer}>
              <Icon name="checkbox-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Enviado</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Todos tus articulos que estan por pagar')}>
            <View style={styles.iconContainer}>
              <Icon name="card-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Pagar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Calificaciones dadas a tus vendedores')}>
            <View style={styles.iconContainer}>
              <Icon name="star-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Calificación</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.section, styles.soporte]}>
        <Text style={styles.sectionTitle}>Soporte</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => alert('Bienvenido a Whatsapp Bot')}>
            <View style={styles.iconContainer}>
              <Icon name="logo-whatsapp" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Soporte en linea las 24 horas')}>
            <View style={styles.iconContainer}>
              <Icon name="call-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Necesitas chatear con alguien , te ayudaremos en seguida')}>
            <View style={styles.iconContainer}>
              <Icon name="people-circle-outline" size={24} color="#fff" />
            </View>
            <Text style={styles.iconText}>Chat</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      <Text style={styles.footer}>Gracias por usar nuestra APP</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  //  alignItems: 'center',

  },
  header: {
    alignItems: 'center',
    backgroundColor: '#f1c40f',
  },
  deseos: {
    backgroundColor: '#3498db',
  },
  compras: {
    backgroundColor: '#27ae60',
  },
  soporte: {
    backgroundColor: '#e74c3c',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#090101',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  bannerContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  bannerImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#090101',
  },
});

export default MiCuentaScreen;
