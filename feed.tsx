import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from '../appInstagram/style ';
import { StatusBar } from 'expo-status-bar';



const Posts = [
  {
    id: '1',
    fotoPerfil: 'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x',
    autor: 'FabianoPKR',
    foto: 'https://urbanarts.vteximg.com.br/arquivos/ids/6838240/430351_Ampliada.jpg?v=637292551716170000',
    likes: '1200',
    descricao: 'Jogo Maraca',
    hashtag: '#jogo #flamengo #libertadores',
    local: 'Maracaña'
  },
  {
    id: '2',
    fotoPerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sc7R1HGio7fgubDdpkPeiTPZ8V-bPSjXMl7RX8ltCoE5n0PUG_CcxwAnFdSd6DSCJSk&usqp=CAU',
    autor: 'Maria_oli',
    foto: 'https://embarquenaviagem.com/wp-content/uploads/festa-dan%C3%A7a.jpg',
    likes: '700',
    descricao: 'Sextoooouuu!!!',
    hashtag: '#festa #show #finaldesemana',
    local: 'CasaShow'
  },
  {
    id: '3',
    fotoPerfil: 'https://i.pinimg.com/200x150/5c/d7/37/5cd7379d4ac4d9c250ff11d3fe28972c.jpg',
    autor: 'Junior0932',
    foto: 'https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2016/02/bsb-restaurant-week-close.jpg',
    likes: '90',
    descricao: 'Hora do Jantar',
    hashtag: '#RestaurantWeek #comida #chef',
    local: 'Rio de Janeiro'
  },
  {
    id: '4',
    fotoPerfil: 'https://i.pinimg.com/550x/ef/f3/db/eff3dbf3ddb97b7232e742a97206cc93.jpg',
    autor: 'CarlaDias',
    foto: 'https://s2.glbimg.com/SBe1iWXAy2QvHSIq43H3BYfZ0sQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/7/Z/u7F3f5QG20YD0EpYNiPw/2022-05-12-gato-angora-vida-de-bicho-pixabay-didsss-cat-g4d06d8be5-1280.jpeg',
    likes: '100',
    descricao: 'Cats',
    hashtag: '#Gatos #angora #heterocromia',
    local: 'My House'
  },
  {
    id: '5',
    fotoPerfil: 'https://st2.depositphotos.com/3947277/5732/i/600/depositphotos_57327265-stock-photo-handsome-black-man-looking-at.jpg',
    autor: 'RalphCosta',
    foto: 'https://static.wixstatic.com/media/11062b_bb58c12dbe5b4410966769559513c002~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_bb58c12dbe5b4410966769559513c002~mv2.jpg',
    likes: '80',
    descricao: 'Férias',
    hashtag: '#passeio #rj #diaLindo',
    local: 'RJ021'
  },
  {
    id: '6',
    fotoPerfil: 'https://i.pinimg.com/originals/6e/74/d8/6e74d8d370c13772a26b5d4d4b04e70f.jpg',
    autor: 'SusanOficial',
    foto: 'https://qi.edu.br/wp-content/uploads/2023/01/whatsapp-image-2023-01-10-at-105752.jpeg',
    likes: '203',
    descricao: 'Formatura Programação',
    hashtag: '#formandos #serratec #programacao',
    local: 'Teresópolis'
  },
];



function renderItem({ item: post }) {

  return (
    <View style={styles.post}>
      <StatusBar backgroundColor="#fff" translucent={true} />
      <View style={styles.postHeader}>
        <View>
          <Image style={styles.fotoPerfil} source={{ uri: post.fotoPerfil }} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.autor}>{post.autor}</Text>
          <Text style={styles.local}>{post.local}</Text>
        </View>
        <View style={styles.postOptions}>
          <TouchableOpacity>
            <Image source={require('../appInstagram/src/assets/options.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image style={styles.foto} source={{ uri: post.foto }} />
      </View>
      <View style={styles.footer}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.action}>
              <Image source={require('../appInstagram/src/assets/like.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Image source={require('../appInstagram/src/assets/comment.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Image source={require('../appInstagram/src/assets/send.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image source={require('../appInstagram/src/assets/save.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.likes}>{post.likes} Curtidas</Text>
          <Text style={styles.descricao}>{post.descricao}</Text>
          <Text style={styles.hashtag}>{post.hashtag}</Text>
        </View>
      </View>
    </View>
  );
}

function FeedHeader() {
  return (
    <View style={styles.feedHeader}>
      <Image source={require('../appInstagram/src/assets/logo.png')} />
      <View style={styles.headerIcons}>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../appInstagram/src/assets/messenger.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.iconLike} source={require('../appInstagram/src/assets/like.png')} />
        </TouchableOpacity>

      </View>
    </View>
  );
}
function Footer() {
  return (
    <View style={styles.footerFeed}>
      <TouchableOpacity>
        <Image style={styles.footerIcons} source={require('../appInstagram/src/assets/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcons} source={require('../appInstagram/src/assets/lupa.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcons} source={require('../appInstagram/src/assets/reels.jpg')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcons} source={require('../appInstagram/src/assets/video.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.fotoPerfil} source={require('../appInstagram/src/assets/ftperfil.jpg')} />
      </TouchableOpacity>
    </View>
  );
}

function Feed() {
  return (
    <View style={styles.feedContainer}>
      <FeedHeader />
      <FlatList
        data={Posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}



export default Feed;
