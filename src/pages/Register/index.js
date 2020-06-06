import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap } from '../../component'
import { colors, useForm } from '../../utils'

const Register = ({navigation}) => {
    // const [fullName, setFullName] = useState('');
    // const [profesi, setProfesi] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [form, setForm] = useForm({
        fullName: '',
        profesi: '',
        email: '',
        password: '',
    })

    const onContinue = () => {
        console.log(form)
       // navigation.navigate('UploadFoto')
    }

    return (
        <View style ={styles.page}>
            <Header onPress={()=> navigation.goBack()} title='Regitrasi'/>

            <ScrollView style ={styles.content}>
                <Input 
                label='Full Name'
                value={form.fullName} 
                 onChangeText={value => setForm('fullName',value)}
                />
                <Gap height={24}/>

                <Input 
                label='Pekerjaan'
                value={form.profesi} 
                 onChangeText={value=> setForm('profesi', value)}
                />
                <Gap height={24}/>

                <Input 
                label='Email Address'
                value={form.email} 
                   onChangeText={(value)=> setForm('email',value)}
                />
                <Gap height={24}/>

                <Input 
                label='Password'
                value={form.password} 
                secureTextEntry
                 onChangeText={(value)=> setForm('password',value)}
                />
                <Gap height={28}/>

                <Button title='Continue' onPress={onContinue} />
                <Gap height={24}/>


            </ScrollView>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor:colors.white,
        flex:1
    },
    content: {
        padding:40, 
        paddingTop:0
    }
})
