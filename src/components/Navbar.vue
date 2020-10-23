<template>
  <div class="nav">
    <div class="nav-left">
      <div class="hamburger-wrapper">
        <div class="hamburger"></div>
      </div>
      <img class="brand" src="../assets/logo.png" alt="logo" />
    </div>

    <div class="nav-right">
      <div class="search-bar">
        <input type="text" placeholder="輸入關鍵字" />
        <i class="fas fa-search search-icon"></i>
        <i class="fas fa-camera photo-icon"></i>
      </div>

      <i class="fas fa-bell"></i>
      <i class="fas fa-shopping-cart"></i>

      <div class="user">
        嗨，{{ user.name }}

        <div class="user-image">
          <img :src="user.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      user: {
        name: '陳明倫',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$background-blue: #2f3a4f;
$main-color: #004989;

i:hover {
  cursor: pointer;
}

.nav {
  height: 60px;
  width: 100%;
  background-color: $background-blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  i {
    color: #fff;
  }
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;

  i {
    margin-left: 15px;
  }
}

.hamburger-wrapper {
  width: 25px;
  height: 25px;
  margin-right: 10px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  .hamburger,
  .hamburger::after,
  .hamburger::before {
    width: 100%;
    height: 3px;
    background-color: #fff;
    position: relative;
  }

  .hamburger::after {
    content: '';
    position: absolute;
    top: 8px;
  }

  .hamburger::before {
    content: '';
    position: absolute;
    top: -8px;
  }
}

.brand {
  height: 40px;
}

.search-bar {
  background-color: #fff;
  border-radius: 3px;
  padding: 0 5px;
  height: 35px;
  display: flex;
  align-items: center;

  input {
    padding-left: 5px;
    border: none;
  }

  i {
    color: $background-blue;
    margin: 0 8px;
  }
}

.user {
  width: auto;
  height: 35px;
  border-radius: 50px;
  background-color: $main-color;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  margin-left: 15px;
  font-size: 0.8rem;

  .user-image {
    box-sizing: border-box;
    width: 35px;
    height: 35px;
    border: 3px solid $main-color;
    background-color: #fff;
    border-radius: 50px;
    overflow: hidden;
    margin-left: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
