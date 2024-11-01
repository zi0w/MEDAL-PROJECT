# 🏅 Olympic Medal Tracker
Vite를 이용한 리액트 프로젝트로 올림픽의 매달 집계를 관리하는 Olympic Medal Tracker를 구현했습니다.

## 프로젝트 구조
📦src

 ┣ 📂assets
 
 ┃ ┗ 📜react.svg

 ┣ 📂components

 ┃ ┣ 📜MedalForm.jsx
 
 ┃ ┣ 📜MedalFormInput.jsx
 
 ┃ ┗ 📜MedalList.jsx
 
 ┣ 📜.DS_Store
 
 ┣ 📜App.css
 
 ┣ 📜App.jsx
 
 ┣ 📜index.css
 
 ┗ 📜main.jsx

## 프로젝트 기능
### 🕹️ Create
- `국가 추가` 버튼을 통해 폼 제출시 새로운 나라와 해당 메달 수를 리스트에 추가할 수 있습니다.
- 추가하고자 하는 국가명이 기존 리스트에 존재할 경우, `alert`를 통해 사용자에게 중복 국가임을 알립니다.

### 🕹️ Read
- 화면에 국가별 메달 집계를 리스트 형태로 보여줍니다.
- 국가들은 기본적으로 금메달 수 기준으로 내림차순 정렬됩니다.
- `금메달 기준 정렬`, `총메달 기준 정렬` 버튼을 통해 사용자가 원하는 정렬 기준에 맞춰 내림차순 정렬할 수 있습니다.

### 🕹️ Update
- `업데이트` 버튼을 통해 이미 추가된 국가의 메달 수를 수정할 수 있습니다.
- 사용자가 수정하려는 국가 이름이 리스트에 존재하지 않을 경우 `alert`을 통해 존재하지 않는 국가임을 알립니다.

### 🕹️ Delete
- 리스트에 포시된 나라 옆의 `삭제` 버튼으로, 해당 국가 정보를 삭제할 수 있습니다.


## 컴포넌트 설명
### 🧩 App
- 설명: 전체 애플리케이션의 루트 컴포넌트로, 메달 입력 및 리스트 관리와 관련된 상태(`country`, `gold`, `siver`, `bronze`, `results`)를 관리합니다.

- 기능:
    - `addResultHandler`: 새로운 국가 정보 추가
    - `updateResultHandler`: 기존 국가 정보 업데이트
    - `deleteResultHandler`: 국가 정보 삭제

### 🧩 MedalForm
- 설명: 메달 정보를 입력하고 추가 또는 업데이트할 수 있는 폼 컴포넌트입니다.

- 기능:
    - 국가명, 금메달, 은메달, 동메달 입력을 위한 입력 필드 렌더링
    - `국가 추가` 버튼으로 새로운 국가 추가 (`addResultHandler` 호출)
    - `업데이트` 버튼으로 기존 국가 정보 업데이트 (`updateResultHandler` 호출)

### 🧩 MedalFormInput
- 설명: `MedalForm`에서 사용되는 개별 입력 필드를 렌더링하는 컴포넌트입니다.

- 기능:
    - `label`, `type`, `value`, `placeholder`, `max`, `min` 등의 props를 받아 입력 필드 구성
    - 입력 시 `onChange`를 호출하여 상위 컴포넌트의 상태를 업데이트

### 🧩 MedalList
- 설명: 국가별 메달 정보를 리스트 형태로 보여주고, 정렬과 삭제 기능을 제공하는 컴포넌트입니다.

- 기능:
    - `sortBy` 상태를 통해 금메달 수 또는 총 메달 수 기준으로 정렬 옵션 제공
    - `deleteResultHandler`를 통해 특정 국가를 삭제
    - `sort-container` 내 정렬 버튼을 통해 정렬 기준 변경


