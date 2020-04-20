<template>
    <div :style="$store.state.activeScheme.boxShadow" id="side-bar">
        <ul>
            <li>
                <router-link to="/login">
                    <img id="team-icon" src="@/assets/mashirosmall.jpg" alt="avatar">
                </router-link>
            </li>
            <li class="nav-menu">
                <router-link to="/homepage">
                <img class="menu-icon" src="@/assets/icons/home.png" alt="home">
                </router-link>
                Home
            </li>
            <li class="nav-menu">
                <router-link to="/dashboard">
                    <img class="menu-icon" src="@/assets/icons/chart-area.png" alt="board">
                </router-link>
                Board
            </li>
            <li class="nav-menu">
                <router-link to="/challenge">
                <img class="menu-icon" src="@/assets/icons/flag-checkered.png" alt="challs">
                </router-link>
                Challs
            </li>
            <li class="nav-menu">
                <router-link to="/ranking">
                <img class="menu-icon" src="@/assets/icons/crown.png" alt="rank">
                </router-link>
                Rank
            </li>
            <li class="nav-menu">
                <router-link to="/utils">
                <img class="menu-icon" src="@/assets/icons/cog.png" alt="utils">
                </router-link>
                Utils
            </li>
            <li class="nav-menu">
                <router-link to="/admin">
                    <img class="menu-icon" src="@/assets/icons/admin.png" alt="utils">
                </router-link>
                    Admin
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sideBar",
    }
</script>

<style scoped>
    .menu-icon{
        display: block;
        width: 45px;
        margin: 0 auto;
        padding-bottom: 10px;
        transition: all 0.1s ease-in-out;
    }
    .menu-icon:hover{
        width: 80px;
    }
#side-bar{
    position: relative;
    width: 120px;
    height: 95%;
    max-height: 100%;
    border-radius: 50px;
    margin: 10% auto;
    transition: all 0.2s linear;
    overflow: auto;
    user-select: none;

}
#side-bar:hover{
    transform: translate(0, -5px);
}

    ul{
        list-style: none;
        position: relative;
        padding-top: 20px;
        text-align: center;
    }
    #team-icon{
        border-radius: 40px;
        width: 80px;
        transition: all 1s ease-in-out;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    #team-icon:hover{
        transform: rotate(360deg);
    }
    .nav-menu{
        font-size: 22px;
        font-family: "Microsoft YaHei",sans-serif;
        font-weight: normal;
        letter-spacing: -1px;
        margin-top: 30px;

    }
</style>
