import { ref, onUnmounted } from 'vue'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTzscstZsBRovefyK6JoNjHyLxoYN-7IY",
    authDomain: "shopper-89651.firebaseapp.com",
    projectId: "shopper-89651",
    storageBucket: "shopper-89651.appspot.com",
    messagingSenderId: "1023746513206",
    appId: "1:1023746513206:web:6ca8faae3e2fa59ac43b97",
    measurementId: "G-7GFCX4NXPE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const UserAdminCollection = collection(db, 'UserAdmin');

export const createUser = async user => {
    return await addDoc(UserAdminCollection, user);
}

export const getUser = async id => {
    const userDoc = await getDoc(doc(UserAdminCollection, id));
    return userDoc.exists() ? userDoc.data() : null;
}

export const updateUser = async (id, user) => {
    await updateDoc(doc(UserAdminCollection, id), user);
}

export const deleteUser = async id => {
    await deleteDoc(doc(UserAdminCollection, id));
}

export const useLoadUsers = () => {
    const UserAdmin = ref([]);
    const close = onSnapshot(UserAdminCollection, snapshot => {
        UserAdmin.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
    onUnmounted(close);
    return UserAdmin;
}