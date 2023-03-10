import React from 'react'

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">ADMIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">XYZ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">ABC</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">DEF</a>
        </li>
      </ul>
      <form class="d-flex" role="search">

        <button class="btn btn-outline-primary" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>

  )
}

