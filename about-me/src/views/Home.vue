<template>
  <div class="home">
    <h1>Welcome to My Portfolio</h1>
    <p>Here you can find information about me and my work.</p>
    <h2>About Me</h2>
    <p>I am a passionate software developer with experience in web development and a strong focus on front-end technologies. I love creating user-friendly and visually appealing websites that provide a great user experience.</p>
    <h2>My Work</h2>
    <p>Check out some of my recent projects:</p>
    <ul>
      <li>
        <a href="/projects/project1">Project 1</a>
      </li>
      <li>
        <a href="/projects/project2">Project 2</a>
      </li>
      <li>
        <a href="/projects/project3">Project 3</a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
