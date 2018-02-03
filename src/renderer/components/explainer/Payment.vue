<template>
    <div>
        <table>
            <tr>
                <td><b>Destination</b></td>
                <td><span v-text="operation.destination"></span></td>
            </tr>
            <tr>
                <td><b>Amount</b></td>
                <td>
                    <span v-text="operation.amount"></span>
                    <span v-if="operation.asset.issuer === null">XLM</span>
                    <span v-else v-text="operation.asset.code"></span>
                </td>
            </tr>
            <tr v-if="operation.asset.issuer">
                <td><b>Asset Issuer</b></td>
                <td><span v-text="operation.asset.issuer"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['operation']
  }
</script>