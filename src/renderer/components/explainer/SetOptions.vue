<template>
    <div>
        <table>
            <template v-if="operation.signer">
                <tr v-if="operation.signer.ed25519PublicKey">
                    <td><b>SIGNER_KEY</b></td>
                    <td><span v-text="operation.signer.ed25519PublicKey"></span></td>
                </tr>
                <tr v-if="operation.signer.sha256Hash">
                    <td><b>SIGNER_KEY</b></td>
                    <td><span v-text="operation.signer.sha256Hash"></span></td>
                </tr>
                <tr v-if="operation.signer.preAuthTx">
                    <td><b>SIGNER_KEY</b></td>
                    <td><span v-text="operation.signer.preAuthTx"></span></td>
                </tr>
                <tr v-if="operation.signer.weight">
                    <td><b>SIGNER_WEIGHT</b></td>
                    <td><span v-text="operation.signer.weight"></span></td>
                </tr>
            </template>
            <tr v-if="operation.masterWeight !== undefined">
                <td><b>MASTER_KEY_WEIGHT</b></td>
                <td><span v-text="operation.masterWeight"></span></td>
            </tr>
            <tr v-if="operation.lowThreshold !== undefined">
                <td><b>LOW_TRESHOLD</b></td>
                <td><span v-text="operation.lowThreshold"></span></td>
            </tr>
            <tr v-if="operation.medThreshold !== undefined">
                <td><b>MED_TRESHOLD</b></td>
                <td><span v-text="operation.medThreshold"></span></td>
            </tr>
            <tr v-if="operation.highThreshold !== undefined">
                <td><b>HIGH_TRESHOLD</b></td>
                <td><span v-text="operation.highThreshold"></span></td>
            </tr>
            <tr v-if="operation.homeDomain !== undefined">
                <td><b>HOME_DOMAIN</b></td>
                <td><span v-text="operation.homeDomain"></span></td>
            </tr>
            <tr v-if="operation.setFlags !== undefined">
                <td><b>SET_FLAGS</b></td>
                <td><span v-text="operation.setFlags"></span></td>
            </tr>
            <tr v-if="operation.clearFlags !== undefined">
                <td><b>CLEAR_FLAGS</b></td>
                <td><span v-text="operation.clearFlags"></span></td>
            </tr>
            <tr v-if="operation.inflationDest !== undefined">
                <td><b>INFLATION_DEST</b></td>
                <td><span v-text="operation.inflationDest"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['operation']
  }
</script>