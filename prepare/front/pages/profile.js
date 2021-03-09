import React from 'react';
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

import Head from 'next/head';

const Profile = () => {
    const followerList = [{nickname:'Luvrace'},{nickname: '버즈'},{nickname:'우디'}];
    const followingList = [{nickname:'Luvrace'},{nickname: '버즈'},{nickname:'우디'}];

    return(
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>내 프로필 | Node bird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm/>
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로워 목록" data={followerList}/>
        </AppLayout>
        </>
    )
};

export default Profile;