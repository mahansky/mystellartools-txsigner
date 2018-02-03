<template>
    <div>
        <table>
            <tr>
                <td><b>Account</b></td>
                <td><span v-text="operation.account"></span></td>
            </tr>
            <tr>
                <td><b>Into</b></td>
                <td><span v-text="operation.into"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['operation']
  }
</script>